# Fix team [slug] page - need to escape brackets
$filePath = "src/app/(main)/team/[slug]/page.js"
(Get-Content $filePath) `
  -replace 'src=\{Avatar\}', 'src="/assets/new-avatar.png"' `
  -replace 'src=\{VideoThumbnail\}', 'src="/assets/female-middle-banner.png"' `
  | Set-Content $filePath

Write-Host "Team slug page fixed!" -ForegroundColor Green
