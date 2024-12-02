export const clsn = (...names: unknown[]) =>
  names
    .filter(
      (classesObject) =>
        typeof classesObject === "string" || typeof classesObject === "object",
    )
    .flatMap((classesObject) => {
      if (typeof classesObject !== "object") return classesObject
      if (classesObject === null) return []

      if (Array.isArray(classesObject)) {
        return classesObject
          .filter(Boolean)
          .filter((item) => typeof item === "string")
      }

      return Object.entries(classesObject)
        .filter(([, value]) => !!value)
        .map(([key]) => key)
    })
    .join(" ")
