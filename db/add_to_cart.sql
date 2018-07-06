SELECT * FROM ecommerce_user
join products ON ecommerce_user.user_id = products.user_id
where products.user_id = 1;

