#!/bin/bash

# generate the typescript code
yarn proto-loader-gen-types \
	--grpcLib=@grpc/grpc-js \
	--outDir=proto/			\
	proto/*.proto
