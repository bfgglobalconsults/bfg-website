# Fix business-strategy remaining imports
(Get-Content "src/app/(main)/solutions/business-strategy/page.js") `
  -replace 'import BusinessPortfolio from.*', '' `
  -replace 'import ServiceImage1 from.*', '' `
  -replace 'import ServiceImage2 from.*', '' `
  -replace 'src=\{ServiceImage1\}', 'src="/assets/service-image1.png"' `
  -replace 'src=\{ServiceImage2\}', 'src="/assets/service-image2.png"' `
  -replace 'src=\{BusinessPortfolio\}', 'src="/assets/business-portfolio.jpg"' `
  | Set-Content "src/app/(main)/solutions/business-strategy/page.js"

# Fix privacy page
(Get-Content "src/app/(main)/privacy/page.js") `
  -replace 'import TopBanner from.*public.*', '' `
  -replace 'src=\{TopBanner\}', 'src="/assets/policy-banner.png"' `
  | Set-Content "src/app/(main)/privacy/page.js"

# Fix legal page
(Get-Content "src/app/(main)/legal/page.js") `
  -replace 'import TopBanner from.*public.*', '' `
  -replace 'src=\{TopBanner\}', 'src="/assets/policy-banner.png"' `
  | Set-Content "src/app/(main)/legal/page.js"

# Fix copyright page
(Get-Content "src/app/(main)/copyright/page.js") `
  -replace 'import TopBanner from.*public.*', '' `
  -replace 'src=\{TopBanner\}', 'src="/assets/policy-banner.png"' `
  | Set-Content "src/app/(main)/copyright/page.js"

# Fix feedback page
(Get-Content "src/app/(main)/feedback/page.js") `
  -replace 'import FeedbackBanner from.*public.*', '' `
  -replace 'src=\{FeedbackBanner\}', 'src="/assets/feedback.png"' `
  | Set-Content "src/app/(main)/feedback/page.js"

# Fix news page
(Get-Content "src/app/(main)/insight/news/page.js") `
  -replace 'import Banner from.*public.*', '' `
  -replace 'src=\{Banner\}', 'src="/assets/news-banner.png"' `
  | Set-Content "src/app/(main)/insight/news/page.js"

# Fix blogs page
(Get-Content "src/app/(main)/insight/blogs/page.js") `
  -replace 'import Banner from.*public.*', '' `
  -replace 'src=\{Banner\}', 'src="/assets/news-banner.png"' `
  | Set-Content "src/app/(main)/insight/blogs/page.js"

Write-Host "Remaining main folder pages fixed!" -ForegroundColor Green
