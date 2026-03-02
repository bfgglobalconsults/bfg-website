# Fix team [slug] page
(Get-Content "src/app/(main)/team/[slug]/page.js") `
  -replace 'src=\{Avatar\}', 'src="/assets/new-avatar.png"' `
  -replace 'src=\{VideoThumbnail\}', 'src="/assets/female-middle-banner.png"' `
  | Set-Content "src/app/(main)/team/[slug]/page.js"

Write-Host "Team pages fixed!" -ForegroundColor Green
