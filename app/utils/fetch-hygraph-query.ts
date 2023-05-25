type FechHygraphQueryProps = {
  query: string
  revalidateTime?: number
}

export async function FechHygraphQuery({
  query,
  revalidateTime,
}: FechHygraphQueryProps) {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: revalidateTime,
    },
  })

  const { data } = await response.json()

  return data
}
