PATH_EMULATOR="$HOME/Android/Sdk/emulator"
PATH_EXE_EMULATOR="$PATH_EMULATOR/emulator"

LIST_EMULATORS="$($PATH_EXE_EMULATOR -list-avds | head -n 1)"
NAME_EMULATOR="$LIST_EMULATORS"

$PATH_EXE_EMULATOR -avd $NAME_EMULATOR -no-window  -no-snapshot-load -no-snapshot-save -memory 2000&
EXECUTE_PID=$!
IS_BOOT_ANIMATION_COMMAND="adb -e shell getprop init.svc.bootanim"

# check if emulator is running with adb
while true; do
   animation_mode=`$IS_BOOT_ANIMATION_COMMAND 2>&1`
   echo $animation_mode

   if [[ $animation_mode == "adb: no emulators found" ]]; then
      echo "Emulator don't running"
   elif [[ $animation_mode == "adb: device offline" ]]; then
      echo "Emulator running but offline"
   elif [[ $animation_mode == "stopped" ]]; then
      echo "Emulator running but offline"
      sleep 1
      break
   elif [[ $animation_mode == "running" ]]; then
      echo "Emulator is running..."
   fi
   sleep 1
done

echo "Running scrcpy..."
scrcpy -S --max-size 1024 --video-bit-rate 30M --max-fps 15 --render-driver=opengl &
SCRCYPY_PID=$!

echo "PID of EXECUTE: $EXECUTE_PID"
echo "PID of SCRCYPY: $SCRCYPY_PID"


yarn exc &""
sleep 2
echo "Intalling app..."
yarn android &


trap killProcesses INT

function killProcesses() {
   kill $SCRCYPY_PID
   kill $EXECUTE_PID
   sleep 2
   echo "Killing processes..."
}

wait 

