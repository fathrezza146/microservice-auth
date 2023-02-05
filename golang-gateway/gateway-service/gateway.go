package gateway

import (
	"context"
	"flag"
	auth "gateway-api/auth-proto"
	proto "gateway-api/client-proto"
	user "gateway-api/user-proto"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type AuthGateway struct {
	proto.UnimplementedAuthServiceServer
	auth.AuthServiceClient
	user.UserServiceClient
}

var (
	auth_addr = flag.String("auth_addr", "localhost:9051", "the address to connect to")
	user_addr = flag.String("user_addr", "localhost:9052", "the address to connect to")
)

func InitGateway() *AuthGateway {
	auth_conn, err := grpc.Dial(*auth_addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	a := auth.NewAuthServiceClient(auth_conn)

	user_conn, err := grpc.Dial(*user_addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	u := user.NewUserServiceClient(user_conn)

	return &AuthGateway{
		AuthServiceClient: a,
		UserServiceClient: u,
	}
}

func (s *AuthGateway) Register(ctx context.Context, msg *proto.RegisterMsg) (*proto.AuthResponse, error) {
	regMsg := &auth.RegisterMsg{
		Username: msg.Username,
		Password: msg.Password,
		Email:    msg.Email,
		Fullname: msg.FullName,
	}

	resp, err := s.AuthServiceClient.Register(ctx, regMsg)
	if err != nil {
		log.Fatalf("Register is failed: %v", err)
	}

	respMsg := &proto.AuthResponse{
		Message: resp.Message,
	}

	return respMsg, nil
}

func (s *AuthGateway) Login(ctx context.Context, msg *proto.LoginMsg) (*proto.LoginResponse, error) {
	loginMsg := &auth.LoginMsg{
		Username: msg.Username,
		Password: msg.Password,
	}

	resp, err := s.AuthServiceClient.Login(ctx, loginMsg)
	if err != nil {
		log.Fatalf("Login is failed: %v", err)
	}

	respMsg := &proto.LoginResponse{
		Success: resp.Success,
		Token:   resp.Token,
		Expires: resp.Expires,
	}

	return respMsg, nil
}

func (s *AuthGateway) UpdateUser(ctx context.Context, msg *proto.UpdateUserMsg) (*proto.UpdateUserResponse, error) {
	updateMsg := &user.UpdateUserMsg{
		Id:       msg.Id,
		Username: msg.Username,
		Email:    msg.Email,
		Fullname: msg.Fullname,
	}

	resp, err := s.UserServiceClient.UpdateUser(ctx, updateMsg)
	if err != nil {
		log.Fatalf("Update is failed: %v", err)
	}

	respMsg := &proto.UpdateUserResponse{
		Id:       resp.Id,
		Username: resp.Username,
		Email:    resp.Email,
		FullName: resp.Fullname,
	}

	return respMsg, nil
}
