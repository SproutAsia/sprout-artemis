# Sprout x Artemis

help Sprout Asia connect with Artemis API

# How to install

## 1. install the package
easily install the package using github url

```
npm install github.com/SproutAsia/sprout-artemis
```

## 2. add required .env
artemis prevent us to hit their API we not put it in header.
```
ARTEMIS_ORIGIN=
ARTEMIS_DOMAIN_ID=
```

## 3. use the code
```javascript
ArtemisGrofService.postLogin({
    req: {
        password: "",
        username: ""
    }
})
```

# Notes :
I use date time for versioning. with format {version}.{YYMMDD}.{HHMM}