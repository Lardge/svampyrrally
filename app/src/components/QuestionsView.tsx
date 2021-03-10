export const QuestionsView = ({ questions }: { questions: any[] }) => {
  return (
    <div>
      {questions.map(({ id, clue, solution }) => {
        return (
          <div>
            {id} {clue} {solution}
          </div>
        )
      })}
    </div>
  )
}
