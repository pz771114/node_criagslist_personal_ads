const {exec} = require('../db/mysql')

const getList = (author, keyword)=>{
	let sql = `select * from blogs where 1=1 `
	if(author)
	{
		sql +=`and author='${author}' `
	}

	if(keyword)
	{
		sql +=`and title like '%${keyword}%' `
	}

	sql += `order by createdTime desc;`
	
	//return promise
	return exec(sql)
}

const getDetail = (id)=>{
	let sql = `select * from blogs where 1=1 `
	if(id)
	{
		sql +=`and id = '${id}' `
	}

	sql += `order by createdTime desc`

	return exec(sql)
}

const newBlog = (blogData={})=>{
	const title = blogData.title;
	const content = blogData.content;
	const author = blogData.author;
	const createdTime = Date.now();
	const modifiedTime = createdTime;

	const sql = `
	insert into blogs (title, content, createdTime, modifiedTime, author)
	values('${title}','${content}', '${createdTime}', '${modifiedTime}','${author}' );`;

	return exec(sql).then(insertData=>{
		return {
			id:insertData.insertId
		}
	});
}

const updateBlog = (id, blogData={})=>{
	const title = blogData.title;
	const content = blogData.title;
	const modifiedTime = Date.now();

	const sql = `update blogs set title = '${title}', content = '${content}', modifiedTime = '${modifiedTime}' where id = ${id};`

	return exec(sql).then(updateData=>{
		console.log('Updated data:', updateData);
		if(updateData.affectedRows > 0)
		{
			return true;
		}

		return false;
	});
}

const delBlog = (id)=>{
	const sql = `delete from blogs where id =${id};`;

	return exec(sql).then(deleteData=>{
		console.log('Delete data:', deleteData);
		if(deleteData.affectedRows > 0)
		{
			return true;
		}

		return false;
	})
}

module.exports = {
	getList,
	getDetail,
	newBlog,
	updateBlog,
	delBlog
}