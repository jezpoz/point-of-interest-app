$CleanSnapshotsCommand = "Get-ChildItem -Include __snapshots__ -Recurse -Force | Remove-Item -Force -Recurse";
Invoke-Expression $CleanSnapshotsCommand;
Exit-PSHostProcess;