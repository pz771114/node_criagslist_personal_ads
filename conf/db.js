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
	 database:'myblog'
	}
}

if(env==='production')
{
	MYSQL_CONF = {
	 connectionLimit:10,
	 password:'9b984a4e',
	 user:'bedacf0bafe36b',
	 host:'us-cdbr-east-02.cleardb.com',
	 port:'3306',
	 database:'myblog'
	}
}

MYSQL_CONF = {
	 connectionLimit:10,
	 password:'password',
	 user:'root',
	 host:'localhost',
	 port:'3306',
	 database:'myblog'
	}

module.exports ={
	MYSQL_CONF
} 