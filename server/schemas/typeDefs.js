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
        feedback:[Feedback]
    }

    type feedback{
        _id:ID
        text:String
        Feedbacktype:feedbacktype
    }

    type feedbacktype{
        _id:ID
        type:String
    }
    type Query{
        project: Project
    }
    # type Mutation{
    # }
`;

module.exports = typeDefs;