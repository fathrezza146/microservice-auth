package main

import (
	"flag"
	"fmt"
	"log"
	"net"

	client "gateway-api/client-proto"
	"gateway-api/gateway-service"

	"google.golang.org/grpc"
)

var (
	port = flag.Int("port", 9050, "The server port")
)

func main() {
	flag.Parse()

	listen, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	g := grpc.NewServer()
	gateway := *gateway.InitGateway()

	client.RegisterAuthServiceServer(g, &gateway)

	log.Printf("server listening at %v", listen.Addr())
	if err := g.Serve(listen); err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
}
