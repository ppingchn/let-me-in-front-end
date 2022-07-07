export default function CompanyAvatar({ width, height, picture }) {
  return (
    <img
      className={`inline-block h-${height} w-${width}`}
      src={
        picture
          ? picture
          : `https://media-exp1.licdn.com/dms/image/C560BAQGfckYYof6FPA/company-logo_200_200/0/1651140431122?e=1663804800&v=beta&t=eiOc5hR4BVWAj97_tmOVUZTE3I9liIatMlNKle9mzPA`
      }
      alt="profile"
    />
  );
}
