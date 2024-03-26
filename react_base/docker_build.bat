@REM dockerbuild
@REM docker build ./ --build-arg USERNAME=$USER -t flask_react_app .
docker build --no-cache -t flask_react_app .
