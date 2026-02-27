# Fix case-study page
(Get-Content "src/app/(main)/insight/case-study/page.js") `
  -replace 'import Banner from.*public.*\n', '' `
  -replace 'import Technology from.*public.*\n', '' `
  -replace 'import Business from.*public.*\n', '' `
  -replace 'import Research from.*public.*\n', '' `
  -replace 'import Training from.*public.*\n', '' `
  -replace 'src=\{Banner\}', 'src="/assets/case-studies.jpg"' `
  -replace 'src=\{Technology\}', 'src="/assets/technology-software1.png"' `
  -replace 'src=\{Business\}', 'src="/assets/business-strategy1.jpg"' `
  -replace 'src=\{Research\}', 'src="/assets/research-analytics1.jpg"' `
  -replace 'src=\{Training\}', 'src="/assets/training-development1.jpg"' `
  | Set-Content "src/app/(main)/insight/case-study/page.js"

# Fix careers page
(Get-Content "src/app/(main)/careers/page.js") `
  -replace 'import TopBanner from.*public.*\n', '' `
  -replace 'import Banner from.*public.*\n', '' `
  -replace 'src=\{TopBanner\}', 'src="/assets/career-img.jpg"' `
  -replace 'src=\{Banner\}', 'src="/assets/career-banners-new.jpg"' `
  | Set-Content "src/app/(main)/careers/page.js"

# Fix award-recognition page
(Get-Content "src/app/(main)/award-recognition/page.js") `
  -replace 'import TopBanner from.*public.*\n', '' `
  -replace 'import GovernanceImg from.*public.*\n', '' `
  -replace 'import FirstAward from.*public.*\n', '' `
  -replace 'import SecondAward from.*public.*\n', '' `
  -replace 'import ThirdAward from.*public.*\n', '' `
  -replace 'import FourthAward from.*public.*\n', '' `
  -replace 'src=\{TopBanner\}', 'src="/assets/award-banner.jpg"' `
  -replace 'src=\{GovernanceImg\}', 'src="/assets/governance-image.png"' `
  -replace 'src=\{FirstAward\}', 'src="/assets/award-1.png"' `
  -replace 'src=\{SecondAward\}', 'src="/assets/award-2.png"' `
  -replace 'src=\{ThirdAward\}', 'src="/assets/award-3.png"' `
  -replace 'src=\{FourthAward\}', 'src="/assets/award-4.png"' `
  | Set-Content "src/app/(main)/award-recognition/page.js"

# Fix about page
(Get-Content "src/app/(main)/about/page.js") `
  -replace 'import Banner from.*public.*\n', '' `
  -replace 'import Picture from.*public.*\n', '' `
  -replace 'src=\{Banner\}', 'src="/assets/glass-building.jpeg"' `
  -replace 'src=\{Picture\}', 'src="/assets/festus-bello-image.png"' `
  | Set-Content "src/app/(main)/about/page.js"

# Fix ai-advantage page
$content = Get-Content "src/app/(main)/ai-advantage/page.js" -Raw
$content = $content -replace 'import Banner from.*\n', ''
$content = $content -replace 'import Avatar from.*\n', ''
$content = $content -replace 'import MidBanner from.*\n', ''
$content = $content -replace 'import ContentBanner from.*\n', ''
$content = $content -replace 'import BottomBanner from.*\n', ''
$content = $content -replace 'import CustomerBanner from.*\n', ''
$content = $content -replace 'import ProfitBanner from.*\n', ''
$content = $content -replace 'import NumberOne from.*\n', ''
$content = $content -replace 'import NumberTwo from.*\n', ''
$content = $content -replace 'import NumberThree from.*\n', ''
$content = $content -replace 'import Work1 from.*\n', ''
$content = $content -replace 'import Work2 from.*\n', ''
$content = $content -replace 'import Work3 from.*\n', ''
$content = $content -replace 'src=\{Banner\}', 'src="/assets/ai-banner.png"'
$content = $content -replace 'src=\{Avatar\}', 'src="/assets/avatar.png"'
$content = $content -replace 'src=\{MidBanner\}', 'src="/assets/mid-banner.png"'
$content = $content -replace 'src=\{ContentBanner\}', 'src="/assets/content-banner.png"'
$content = $content -replace 'src=\{BottomBanner\}', 'src="/assets/bottom-banner.png"'
$content = $content -replace 'src=\{CustomerBanner\}', 'src="/assets/customer-banner.png"'
$content = $content -replace 'src=\{ProfitBanner\}', 'src="/assets/profit-chart.png"'
$content = $content -replace 'src=\{NumberOne\}', 'src="/assets/number1.png"'
$content = $content -replace 'src=\{NumberTwo\}', 'src="/assets/number2.png"'
$content = $content -replace 'src=\{NumberThree\}', 'src="/assets/number3.png"'
$content = $content -replace 'src=\{Work1\}', 'src="/assets/work1.png"'
$content = $content -replace 'src=\{Work2\}', 'src="/assets/work2.png"'
$content = $content -replace 'src=\{Work3\}', 'src="/assets/work3.png"'
$content | Set-Content "src/app/(main)/ai-advantage/page.js"

Write-Host "All remaining main folder files fixed!" -ForegroundColor Green
