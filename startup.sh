PATH_EMULATOR="$HOME/Android/Sdk/emulator"
PATH_EXE_EMULATOR="$PATH_EMULATOR/emulator"

LIST_EMULATORS="$($PATH_EXE_EMULATOR -list-avds | head -n 1)"
NAME_EMULATOR="$LIST_EMULATORS"

$PATH_EXE_EMULATOR -avd $NAME_EMULATOR -no-window &
EXECUTE_PID=$!

sleep 5
scrcpy 
SCRCYPY_PID=$!

echo "PID of EXECUTE: $EXECUTE_PID"
echo "PID of SCRCYPY: $SCRCYPY_PID"

trap killProcesses INT

function killProcesses() {
   kill $SCRCYPY_PID
   kill $EXECUTE_PID
}

