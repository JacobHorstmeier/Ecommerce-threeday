delete from products
where id = $1;
select * from products ORDER BY id