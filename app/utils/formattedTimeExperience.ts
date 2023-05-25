type FormattedTimeExperienceProps = {
  years: number
  monthsRemaining: number
  months: number
}

export function FormattedTimeExperience({
  years,
  monthsRemaining,
  months,
}: FormattedTimeExperienceProps) {
  return years > 0
    ? `${years} ano${years > 1 ? 's' : ''}${
        monthsRemaining > 0
          ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
          : ''
      }`
    : `${months} mes${months > 1 ? 'es' : ''}`
}
