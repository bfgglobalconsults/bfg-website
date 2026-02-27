# Fix tech-achievers page
(Get-Content "src/app/(main)/program/tech-achievers/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/tech-achiever.jpg"' `
  -replace 'src=\{SmeGroup\}', 'src="/assets/achiever-card.jpg"' `
  -replace 'src=\{Beauty\}', 'src="/assets/sme-woman.png"' `
  | Set-Content "src/app/(main)/program/tech-achievers/page.js"

# Fix sme-klinic page
(Get-Content "src/app/(main)/program/sme-klinic/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/sme-klinic.png"' `
  -replace 'src=\{KlinicGroup\}', 'src="/assets/klinic-card.jpg"' `
  -replace 'src=\{Beauty\}', 'src="/assets/sme-woman.png"' `
  | Set-Content "src/app/(main)/program/sme-klinic/page.js"

# Fix ai-advantage page
(Get-Content "src/app/(main)/program/ai-advantage/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/ai-advantage.png"' `
  -replace 'src=\{AiGroup\}', 'src="/assets/ai-card.jpg"' `
  -replace 'src=\{Beauty\}', 'src="/assets/sme-woman.png"' `
  | Set-Content "src/app/(main)/program/ai-advantage/page.js"

# Fix dialectics page
(Get-Content "src/app/(main)/program/dialectics/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/dialectics.png"' `
  -replace 'src=\{DialetGroup\}', 'src="/assets/dialet-card.jpg"' `
  -replace 'src=\{Beauty\}', 'src="/assets/sme-woman.png"' `
  | Set-Content "src/app/(main)/program/dialectics/page.js"

Write-Host "All program pages fixed!" -ForegroundColor Green
