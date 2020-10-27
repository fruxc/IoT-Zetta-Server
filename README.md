# IoT-zetta-server

IoT Servers using ZettaJs

## To Run

```bash
npm install
npm start
```

## Set device id after devices/

```bash
curl http://127.0.0.1:1337/servers/LED%20Server/devices/b248f37b-e0bc-4bb4-850d-2ece690daab2
```


## Only for windows run this command before cURL Post

```bash
Remove-item alias:curl
```

## Change transition status

```bash 
curl -i -X POST http://127.0.0.1:1337/servers/LED%20Server/devices/b248f37b-e0bc-4bb4-850d-2ece690daab2 -d 'action=turn-on'
```
