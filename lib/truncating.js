export const truncating = (CourseName, truncateLength) => {
    return CourseName.length > truncateLength
      ? CourseName.substring(0, truncateLength) + "..."
      : CourseName;
  };
  