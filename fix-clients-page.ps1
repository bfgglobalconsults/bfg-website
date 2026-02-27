# Fix clients page - remove all imports and replace usages
$content = Get-Content "src/app/(main)/clients/page.js" -Raw

# Remove all image imports
$content = $content -replace 'import Banner from.*\n', ''
$content = $content -replace 'import DMJTravel from.*\n', ''
$content = $content -replace 'import STTravels from.*\n', ''
$content = $content -replace 'import DavidPrestige from.*\n', ''
$content = $content -replace 'import Ampersand from.*\n', ''
$content = $content -replace 'import Sensang from.*\n', ''
$content = $content -replace 'import Gigs from.*\n', ''
$content = $content -replace 'import Alubarika from.*\n', ''
$content = $content -replace 'import Twenty from.*\n', ''
$content = $content -replace 'import Client\d+ from.*\n', ''

# Replace all src usages
$content = $content -replace 'src=\{Banner\}', 'src="/assets/our-clients.jpg"'
$content = $content -replace 'src=\{DMJTravel\}', 'src="/assets/dmj.png"'
$content = $content -replace 'src=\{STTravels\}', 'src="/assets/ST-TRAVELS.png"'
$content = $content -replace 'src=\{DavidPrestige\}', 'src="/assets/david-presage.png"'
$content = $content -replace 'src=\{Ampersand\}', 'src="/assets/ampersand.png"'
$content = $content -replace 'src=\{Sensang\}', 'src="/assets/sensang.png"'
$content = $content -replace 'src=\{Gigs\}', 'src="/assets/gigs-ltd.png"'
$content = $content -replace 'src=\{Alubarika\}', 'src="/assets/alubarika.png"'
$content = $content -replace 'src=\{Twenty\}', 'src="/assets/12twenty.jpg"'
$content = $content -replace 'src=\{Client1\}', 'src="/assets/client1.png"'
$content = $content -replace 'src=\{Client2\}', 'src="/assets/client2.jpg"'
$content = $content -replace 'src=\{Client3\}', 'src="/assets/client3.jpg"'
$content = $content -replace 'src=\{Client4\}', 'src="/assets/client4.png"'
$content = $content -replace 'src=\{Client5\}', 'src="/assets/client5.png"'
$content = $content -replace 'src=\{Client6\}', 'src="/assets/client6.png"'
$content = $content -replace 'src=\{Client7\}', 'src="/assets/client7.png"'
$content = $content -replace 'src=\{Client8\}', 'src="/assets/client8.jpg"'
$content = $content -replace 'src=\{Client9\}', 'src="/assets/client9.png"'
$content = $content -replace 'src=\{Client10\}', 'src="/assets/client10.png"'
$content = $content -replace 'src=\{Client11\}', 'src="/assets/client11.png"'
$content = $content -replace 'src=\{Client12\}', 'src="/assets/client12.png"'
$content = $content -replace 'src=\{Client13\}', 'src="/assets/client13.png"'
$content = $content -replace 'src=\{Client14\}', 'src="/assets/client14.jpg"'
$content = $content -replace 'src=\{Client15\}', 'src="/assets/client15.png"'
$content = $content -replace 'src=\{Client16\}', 'src="/assets/client16.png"'
$content = $content -replace 'src=\{Client17\}', 'src="/assets/client17.png"'
$content = $content -replace 'src=\{Client18\}', 'src="/assets/client18.png"'
$content = $content -replace 'src=\{Client19\}', 'src="/assets/client19.jpg"'
$content = $content -replace 'src=\{Client20\}', 'src="/assets/client20.PNG"'

$content | Set-Content "src/app/(main)/clients/page.js"

Write-Host "Clients page fixed!" -ForegroundColor Green
