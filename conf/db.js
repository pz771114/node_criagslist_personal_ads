const env = process.env.NODE_ENV;

let MYSQL_CONF

if(env === 'dev')
{
	MYSQL_CONF = {
	 connectionLimit:10,
	 password:'password',
	 user:'root',
	 host:'localhost',
	 port:'3306',
	 database:'job1'
	}
}

if(env==='production')
{
	MYSQL_CONF = {
	 connectionLimit:10,
	 password:'password',
	 user:'root',
	 host:'localhost',
	 port:'3306',
	 database:'job1'
	}
}

MYSQL_CONF = {
	 connectionLimit:10,
	 password:'password',
	 user:'root',
	 host:'localhost',
	 port:'3306',
	 database:'job1'
	}

module.exports ={
	MYSQL_CONF
} 