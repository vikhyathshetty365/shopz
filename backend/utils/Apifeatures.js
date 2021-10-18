class ApiFeatures {


    constructor(query, querystr) {
        this.query = query;
        this.querystr = querystr;



    }

    search() {

        const keyword = this.querystr.keyword ?
            {
                name: {
                    $regex: this.querystr.keyword,
                    $options: "i"
                }

            } : {};


        this.query = this.query.find(keyword);
        return this
    }
    filter() {
        const querycopy = { ...this.querystr }

        const remove = ["keyword", "page", "limit"]

        remove.forEach((k) => delete querycopy[k])

        let queryStr = JSON.stringify(querycopy);

        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr))

        return this






    }
    pagination(pagelimit) {
        const page = Number(this.querystr.page) || 1
        let limit = pagelimit
        const skip = (page - 1) * limit

        this.query = this.query.limit(limit).skip(skip)
        return this
    }


}




module.exports = ApiFeatures;