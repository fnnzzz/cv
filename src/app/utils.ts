export const getOverallExperienceYears = () => {
    const firstYearInIT = 2015
    const currentYear = new Date().getFullYear()
    const diff = currentYear - firstYearInIT
    return diff.toString()
}