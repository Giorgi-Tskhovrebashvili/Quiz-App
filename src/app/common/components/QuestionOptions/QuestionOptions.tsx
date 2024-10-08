import { Question } from "../../types"

interface QuestionOptionsType {
    data: Question
}

const QuestionOptions = ({data}: QuestionOptionsType) => {
  return (
    <div>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  )
}

export default QuestionOptions
