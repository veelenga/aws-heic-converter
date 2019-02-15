# AWS Lamba HEIC Converter

An example of AWS Lambda HEIC converter.

## Usage

```console
$ npm install

$ docker run --rm -v $PWD:/var/task lambci/lambda:nodejs8.10 index.handler '{"img": "assets/example.heic"}'
```

It will convert the HEIC image to JPEG inside AWS Lambda emulated environment.
