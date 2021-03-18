import React, { useCallback, useEffect, useState } from 'react'

export const QuestionsView = ({ questions }: { questions: any[] }) => {
  //const [fetchClue, setFetchClue] = useState(false)
  //const [clueFetched, setClueFetched] = useState(false)

  const fetchLogin = useCallback(
    () =>
      fetch(`https://svampyrerna.herokuapp.com/login`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify({
          username: 'admin',
          password: 's3cr3t',
          identity: '',
          secret: '',
        }),
      }),
    []
  )

  const fetchRebus = useCallback(
    () =>
      fetch(`https://google.com`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
      }),
    []
  )

  useEffect(() => {
    console.log('fetching!')

    fetchLogin()
      .then((res) => {
        console.log('res -->', res)
        return fetchRebus()
          .then((res) => res.json())
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log(error))
  }, [fetchLogin, fetchRebus])

  return (
    <div>
      {questions.map(({ id, clue, solution }) => {
        return (
          <div key={id}>
            {id} {clue} {solution}
            <button onClick={() => {}}>click me</button>
          </div>
        )
      })}
    </div>
  )
}
