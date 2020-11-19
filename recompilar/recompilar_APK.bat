echo off
echo Deseja recompilar todo o projeto novamente?
pause
echo ...
echo Recompilando ...
echo ...
cd\ionic-proj\projeto-plugins\
rd /s/q android
rd /s/q www

cd\ionic-proj\projeto-plugins\recompilar\scripts
CALL build.bat

cd\ionic-proj\projeto-plugins\recompilar\scripts
CALL cap_add_android.bat

cd\ionic-proj\projeto-plugins\recompilar\scripts
CALL cap_copy.bat

cd\ionic-proj\projeto-plugins\recompilar\scripts
CALL copy_firebase_api_key.bat

cd\ionic-proj\projeto-plugins\recompilar\scripts
CALL cap_open_android.bat

echo Projeto recompilado


