const typeDefs = `
    type Project{
        _id: ID
        name:String
        rubric:Rubric
    }

    type Rubric{
        _id:ID
        sections:[Section]
    }

    type Section{
        _id:ID
        criteria:[Criterion]
    }

    type Criterion{
        name:String
        description:String
        options:[CriterionOption]
    }

    type CriterionOption{
        text:String
        value:Int
        feedback:String
    }

    type feedback{
        _id:ID
        rubric:Rubric
        text:String
    }
    type Grade{
        _id:ID
        range:Range
        grade:String
    }
    type Range{
        min:Float
        max:Float
    }
    type Query{
        project: Project
    }
    # type Mutation{
    # }
`;

module.exports = typeDefs;