#!/bin/bash
# COLORS
RED='\033[0;31m'
YEL='\033[1;33m'
GRE='\033[0;32m'
PUR='\033[0;35m'
CYA='\033[0;36m'

NC='\033[0m' # No Color

clear

echo -e "\n\n ${RED}"

clear

echo '
          ___        ___                                    _ __
          | . > _ _  | __>_ _  ___  ___ ._ _  ___  _ _  ___ | / /
          | . \| | | | _>| |_><_> |/ . || * |<_> || |_>/ . \|  \ 
          |___/`_. | |_| |_|  <___|\_. ||_|_|<___||_|  \___/|_\_\
               <___|               <___|   



'

echo -e "${NC}My Website =>  ${CYA}fcanalejo.web.app${GRE}"
echo -e "\n\n"
echo -e "\t\t\t PROJECT NAME \n\n"

echo '
_____/\\\\\\\\\\\____/\\\____________________________________________________/\\\___________________________________________________        
 ___/\\\/////////\\\_\/\\\______________________________________/\\\_________\/\\\___________________________________________________       
  __\//\\\______\///__\/\\\_____________________________________\/\\\_________\/\\\___________/\\\__/\\\_____/\\\_____________________      
   ___\////\\\_________\/\\\_____________/\\\\\________/\\\\\\\\_\/\\\\\\\\____\/\\\__________\//\\\/\\\___/\\\\\\\\\\\_____/\\\\\\\\__     
    ______\////\\\______\/\\\\\\\\\\____/\\\///\\\____/\\\//////__\/\\\////\\\__\/\\\\\\\\\_____\//\\\\\___\////\\\////____/\\\/////\\\_    
     _________\////\\\___\/\\\/////\\\__/\\\__\//\\\__/\\\_________\/\\\\\\\\/___\/\\\////\\\_____\//\\\_______\/\\\_______/\\\\\\\\\\\__   
      __/\\\______\//\\\__\/\\\___\/\\\_\//\\\__/\\\__\//\\\________\/\\\///\\\___\/\\\__\/\\\__/\\_/\\\________\/\\\_/\\__\//\\///////___  
       _\///\\\\\\\\\\\/___\/\\\___\/\\\__\///\\\\\/____\///\\\\\\\\_\/\\\_\///\\\_\/\\\\\\\\\__\//\\\\/_________\//\\\\\____\//\\\\\\\\\\_ 
        ___\///////////_____\///____\///_____\/////________\////////__\///____\///__\/////////____\////____________\/////______\//////////__
'

sleep 1
echo -e '\n\n  
*************************_STARTING_****************************
*____________________--SHOCKBYTE PROJECT--______________________*
********************************************************************
\n\n'

echo -e "${YEL}----------->${RED} May you need (root) access ${YEL} <------------"

echo -e "\n\t"

echo -e "\n\t${GRE} What do you want to do? ${YEL}\n\n\t1 - Open in VScode & Go to dir\n\t2 - Mount local server ${CYA}(DEV) ${RED}[${NC}root${RED}]${YEL}\n\t3 - Mount local server ${CYA}(PROD) ${RED}[${NC}root${RED}]${YEL}\n\t4 - Check updates ${RED}(root)${YEL}\n\t5 - Build & deploy to firebase ${RED}(root)${YEL}\n\t6 - Read toDo.txt & go to dir \n\t0 - Return (exit) \n\n ${RED}"

read -s -n 1 -p 'Option [number]: ' res

[ 1 -eq $res ] && echo "1 - Open in VScode & Go to dir"
[ 2 -eq $res ] && echo "2 - Mount local server (DEV)"
[ 3 -eq $res ] && echo "3 - Mount local server (PROD)"
[ 4 -eq $res ] && echo "4 - Check updates"
[ 5 -eq $res ] && echo "5 - Build & deploy to firebase"
[ 6 -eq $res ] && echo "6 - Read toDo.txt"
[ 0 -eq $res ] && echo "0 - Return"

[ 1 -eq $res ] && cd /home/fragnarok/Desktop/tech-test && code .
[ 2 -eq $res ] && echo -e "\n\n\t**************** Mounting local server (DEV) *******************\n\n"
[ 2 -eq $res ] && cd /home/fragnarok/Desktop/tech-test/Ftest && sudo ng serve -c development --host 192.168.1.113
[ 3 -eq $res ] && echo -e "\n\n\t**************** Mounting local server (PROD) *******************\n\n"
[ 3 -eq $res ] && cd /home/fragnarok/Desktop/tech-test/Ftest && sudo ng serve -c production --host 192.168.1.113
[ 4 -eq $res ] && cd /home/fragnarok/Desktop/tech-test/Ftest && sudo npm update && sudo ng update
[ 5 -eq $res ] && echo -e "\n\n\t**************** Starting deploy *******************\n\n"
[ 5 -eq $res ] && cd /home/fragnarok/Desktop/tech-test/Ftest && sudo ng build -c production && firebase deploy
[ 6 -eq $res ] && cd /home/fragnarok/Desktop/tech-test/Ftest && open recordatorios.txt
[ 0 -eq $res ] && cd /home/fragnarok || exit

echo -e "\n${RED} Current address: \n\t" && pwd

echo -e "\n\n${NC}"
