cd api-service
rm -rf gen
chmod +x swagger-yaml2json.sh
bash swagger-yaml2json.sh
yarn
npm i

cd ../react-app
rm -rf gen
rm -rf node_modules/typescript-fetch-api
yarn run api
yarn add file:gen/api
yarn
npm i
