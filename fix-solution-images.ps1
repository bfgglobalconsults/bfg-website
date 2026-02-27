# Fix information-technology page
(Get-Content "src/app/(main)/solutions/information-technology/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/it-banner.png"' `
  -replace 'src=\{ItImage\}', 'src="/assets/it-images.jpg"' `
  -replace 'src=\{TechnologyPortfolio\}', 'src="/assets/technology-portfolio.jpg"' `
  -replace 'src=\{Employee\}', 'src="/assets/improve-employee.jpg"' `
  -replace 'src=\{DataSecurity\}', 'src="/assets/data-security.jpg"' `
  -replace 'src=\{DataMgt\}', 'src="/assets/data-mgt.jpg"' `
  -replace 'src=\{Flexibility\}', 'src="/assets/flexibility-scalability.jpg"' `
  -replace 'src=\{Expertise\}', 'src="/assets/expertise-resources.jpg"' `
  -replace 'src=\{Innovation\}', 'src="/assets/innovation-development.jpg"' `
  | Set-Content "src/app/(main)/solutions/information-technology/page.js"

# Fix business-strategy page
(Get-Content "src/app/(main)/solutions/business-strategy/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/business-strategy-banner.jpg"' `
  -replace 'src=\{BusinessImage\}', 'src="/assets/black-business.jpg"' `
  -replace 'src=\{BusinessAnalyst\}', 'src="/assets/business-analyst-new.png"' `
  -replace 'src=\{Avatar\}', 'src="/assets/new-avatar.png"' `
  -replace 'src=\{Ifeoma\}', 'src="/assets/ifeoma.png"' `
  -replace 'src=\{Efficiency\}', 'src="/assets/efficiency.jpg"' `
  -replace 'src=\{Cost\}', 'src="/assets/cost.jpg"' `
  -replace 'src=\{Decision\}', 'src="/assets/decision.jpg"' `
  -replace 'src=\{Advantage\}', 'src="/assets/advantage.jpg"' `
  -replace 'src=\{Scalabity\}', 'src="/assets/scalability.jpg"' `
  -replace 'src=\{Operations\}', 'src="/assets/operations.jpg"' `
  -replace 'src=\{BusinessPortfolio\}', 'src="/assets/business-portfolio.jpg"' `
  | Set-Content "src/app/(main)/solutions/business-strategy/page.js"

# Fix training-development page
(Get-Content "src/app/(main)/solutions/training-development/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/training-development-banner.jpg"' `
  -replace 'src=\{Banner\}', 'src="/assets/training-development.jpg"' `
  -replace 'src=\{TrainingImage\}', 'src="/assets/sales-newbanner.jpg"' `
  -replace 'src=\{Happy\}', 'src="/assets/happiness_adama.png"' `
  -replace 'src=\{TrainingAnalyst\}', 'src="/assets/training-analyst.png"' `
  -replace 'src=\{EmployeePerformance\}', 'src="/assets/employee-perfomance.jpg"' `
  -replace 'src=\{Retention\}', 'src="/assets/retention.jpg"' `
  -replace 'src=\{GreaterFlexibility\}', 'src="/assets/greater-flexibility.jpg"' `
  -replace 'src=\{DecisionMaking\}', 'src="/assets/decision-making.jpg"' `
  -replace 'src=\{TopTalent\}', 'src="/assets/top-talent.jpg"' `
  -replace 'src=\{Operations\}', 'src="/assets/operations.jpg"' `
  -replace 'src=\{Avatar\}', 'src="/assets/new-avatar.png"' `
  -replace 'src=\{TrainingPortfolio\}', 'src="/assets/Training-Portfolio.jpg"' `
  -replace 'src=\{ServiceImage1\}', 'src="/assets/service-image1.png"' `
  -replace 'src=\{ServiceImage2\}', 'src="/assets/service-image2.png"' `
  | Set-Content "src/app/(main)/solutions/training-development/page.js"

# Fix research-analytics page
(Get-Content "src/app/(main)/solutions/research-analytics/page.js") `
  -replace 'src=\{TopBanner\}', 'src="/assets/research-banner.jpg"' `
  -replace 'src=\{Banner\}', 'src="/assets/research-analytic.jpg"' `
  -replace 'src=\{ResearchImage\}', 'src="/assets/business-teacher.png"' `
  -replace 'src=\{Simon\}', 'src="/assets/simon-adeh.png"' `
  -replace 'src=\{Kenneth\}', 'src="/assets/kenneth.png"' `
  -replace 'src=\{Avatar\}', 'src="/assets/new-avatar.png"' `
  -replace 'src=\{Optimize\}', 'src="/assets/optimize-image.png"' `
  -replace 'src=\{MeasureImg\}', 'src="/assets/measure-image.jpg"' `
  -replace 'src=\{ExperienceImg\}', 'src="/assets/experience-image.jpg"' `
  -replace 'src=\{PredictiveImg\}', 'src="/assets/predictive-image.jpg"' `
  -replace 'src=\{ImpactImg\}', 'src="/assets/impact-image.jpg"' `
  -replace 'src=\{AppraisalImg\}', 'src="/assets/appraisal-images.png"' `
  -replace 'src=\{ResearchPortfolio\}', 'src="/assets/research-portfolio.jpg"' `
  -replace 'src=\{ServiceImage1\}', 'src="/assets/service-image1.png"' `
  -replace 'src=\{ServiceImage2\}', 'src="/assets/service-image2.png"' `
  | Set-Content "src/app/(main)/solutions/research-analytics/page.js"

Write-Host "All solution pages fixed!" -ForegroundColor Green
