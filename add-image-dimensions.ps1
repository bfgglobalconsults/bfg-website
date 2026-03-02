# Script to add width and height to Image components missing them

$files = @(
    "src/app/(main)/solutions/training-development/page.js",
    "src/app/(main)/solutions/information-technology/page.js",
    "src/app/(main)/solutions/business-strategy/page.js",
    "src/app/(main)/team/page.js",
    "src/app/(main)/terms/page.js",
    "src/app/sales-masterclass/page.js",
    "src/components/project-tabs/ProjectTabs.jsx"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Pattern to match Image components without width prop
        # Add width and height based on className dimensions
        $content = $content -replace '(<Image\s+src="/assets/[^"]+"\s+alt="[^"]+"\s+)(className="w-full h-full)', '$1width={1200} height={600} $2'
        $content = $content -replace '(<Image\s+src="/assets/[^"]+"\s+alt="[^"]+"\s+)(className="w-full rounded-lg")', '$1width={1200} height={600} $2'
        $content = $content -replace '(<Image\s+src="/assets/[^"]+"\s+alt="[^"]+"\s+)(className="w-full h-\[200px\])', '$1width={400} height={200} $2'
        $content = $content -replace '(<Image\s+src="/assets/[^"]+"\s+alt="[^"]+"\s+)(className="w-full h-\[100%\])', '$1width={400} height={500} $2'
        
        Set-Content $file -Value $content
        Write-Host "Updated: $file"
    }
}

Write-Host "Done!"
