# CAZPIE AUDIO - Local Static Web Server
# Run with: powershell -ExecutionPolicy Bypass -File serve.ps1 [port]

param (
    [int]$Port = 3000
)

$root = $PSScriptRoot
if (-not $root) { $root = Get-Location }

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)
$listener.Start()

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "  CAZPIE AUDIO - Portfolio Web Server Running" -ForegroundColor Green
Write-Host "  Local URL: http://localhost:$Port/" -ForegroundColor Yellow
Write-Host "  Root Directory: $root" -ForegroundColor Gray
Write-Host "  Press Ctrl+C to stop the server" -ForegroundColor DarkGray
Write-Host "==================================================" -ForegroundColor Cyan

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".pdf"  = "application/pdf"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".mp3"  = "audio/mpeg"
    ".wav"  = "audio/wav"
    ".ogg"  = "audio/ogg"
}

try {
    while ($listener.Server.IsBound) {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = [System.IO.StreamReader]::new($stream)
        $requestLine = $reader.ReadLine()
        
        if ($requestLine) {
            $tokens = $requestLine.Split(" ")
            $method = $tokens[0]
            $url = $tokens[1]
            
            # Clean URL
            $cleanUrl = $url.Split("?")[0]
            if ($cleanUrl -eq "/" -or $cleanUrl -eq "") {
                $cleanUrl = "/index.html"
            }
            
            $filePath = Join-Path $root ($cleanUrl.TrimStart("/").Replace("/", "\"))
            
            if (Test-Path $filePath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
                $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
                
                $headers = "HTTP/1.1 200 OK`r`n" +
                           "Content-Type: $contentType`r`n" +
                           "Content-Length: $($fileBytes.Length)`r`n" +
                           "Connection: close`r`n`r`n"
                
                $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($headers)
                $stream.Write($headerBytes, 0, $headerBytes.Length)
                $stream.Write($fileBytes, 0, $fileBytes.Length)
            } else {
                $notFound = "HTTP/1.1 404 Not Found`r`nContent-Length: 9`r`nConnection: close`r`n`r`nNot Found"
                $nfBytes = [System.Text.Encoding]::UTF8.GetBytes($notFound)
                $stream.Write($nfBytes, 0, $nfBytes.Length)
            }
        }
        
        $stream.Flush()
        $client.Close()
    }
} finally {
    $listener.Stop()
}
