# Script to fix all remaining image imports in industry pages

$files = @(
    @{
        path = "src/app/(main)/industry/industries/hospitality/page.js"
        images = @(
            @{var="TouristImg"; file="/assets/hospitality-tourism.jpg"},
            @{var="TourismImage"; file="/assets/hospitality-image.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/financial/page.js"
        images = @(
            @{var="FinancialImg"; file="/assets/financial-img.png"},
            @{var="FinanceImage"; file="/assets/finance-image.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/real-estate/page.js"
        images = @(
            @{var="RealEstateImg"; file="/assets/realestate-img.jpg"},
            @{var="RealImage"; file="/assets/realestate-image.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/government/page.js"
        images = @(
            @{var="NonGovtImg"; file="/assets/non-profit-vendor-scaled.jpg"},
            @{var="NgoImage"; file="/assets/ngo-pic.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/entertainment/page.js"
        images = @(
            @{var="EntertainmentImg"; file="/assets/entertainment-banner.jpg"},
            @{var="EntertainmentImage"; file="/assets/entertainment-card.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/oil-gas/page.js"
        images = @(
            @{var="OilGasImg"; file="/assets/oilgas-banner.png"},
            @{var="OilGasImage"; file="/assets/oil-gas.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/consumer/page.js"
        images = @(
            @{var="ConsumerImg"; file="/assets/consumers.png"},
            @{var="ConsumerImage"; file="/assets/consumer-image.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/industrial-manufacturing/page.js"
        images = @(
            @{var="IndustrialManufactureImg"; file="/assets/industrial-manufacture-banner.png"},
            @{var="ManufactureImage"; file="/assets/manufacture-card.jpg"}
        )
    },
    @{
        path = "src/app/(main)/industry/industries/health-social-care/page.js"
        images = @(
            @{var="HealthImg"; file="/assets/health-banner.jpg"},
            @{var="HealthImage"; file="/assets/health-card.jpg"}
        )
    }
)

foreach ($fileInfo in $files) {
    $content = Get-Content $fileInfo.path -Raw
    
    # Remove import lines
    foreach ($img in $fileInfo.images) {
        $content = $content -replace "import $($img.var) from `".*?`";`r?`n", ""
    }
    
    # Replace src={Variable} with src="/path"
    foreach ($img in $fileInfo.images) {
        $content = $content -replace "src=\{$($img.var)\}", "src=`"$($img.file)`""
    }
    
    Set-Content -Path $fileInfo.path -Value $content -NoNewline
    Write-Host "Fixed: $($fileInfo.path)"
}

Write-Host "All files fixed!"
