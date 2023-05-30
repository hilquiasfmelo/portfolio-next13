type FechHygraphQueryProps = {
  query: string
  revalidateTime?: number
}

export const fetchHygraphQuery = async <T>({
  query,
  revalidateTime,
}: FechHygraphQueryProps): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    next: {
      revalidate: revalidateTime,
    },
    body: JSON.stringify({
      query,
    }),
  })

  const { data } = await response.json()

  return data
}
