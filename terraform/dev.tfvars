aws_region        = "us-east-1"
vpc_cidr          = "10.0.0.0/16"
cluster_name      = "devshop-eks"
node_instance_type = "t3.small"

desired_size = 2
min_size     = 1
max_size     = 3
