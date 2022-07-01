import dayjs from 'dayjs';
import CompanyAvatar from '../ui/CompanyAvatar';

export default function EducationElement(props) {
  const { university, degree, field, yearStart, yearEnd } = props;
  return (
    <div className="flex w-11/12 gap-3 py-4 border-b-[1px] border-gray mx-5 p-2">
      <CompanyAvatar
        width={10}
        height={10}
        picture={
          'https://media-exp1.licdn.com/dms/image/C560BAQGfckYYof6FPA/company-logo_100_100/0/1651140431122?e=1663804800&v=beta&t=ZgX4_ZInTLkZ2-RxNqzaJKYSgakeAEpOYNxUuDbhtS8'
        }
      />
      <div className="flex flex-col gap-3">
        {/* Education Name */}
        <div className="flex flex-col">
          <span className="font-bold">{university}</span>
          <div className="flex flex-col">
            {/* degree */}
            <span className="text-sm">
              {degree}, {field}
            </span>
            {/* time length */}
            <span className="text-sm">
              {dayjs(yearStart).format('YYYY')}-{dayjs(yearEnd).format('YYYY')}
            </span>
          </div>
          {/* grade */}
          <span className="text-xs text-darkgray">Grade: 3.49</span>
        </div>
        {/* job description */}
        <span className="text-xs text-darkgray">
          2013 (March) Character design training course at the Faculty of
          Architecture, King Mongkut’s Institute of Technology Ladkrabang 2011
          (May to June) Staff member of Thai-culture Cartoon Camp for children
          hosted by The Thai Cartoon Association 2007-2008 Bulletin-board
          painting and art decoration for freshman welcome
        </span>
      </div>
    </div>
  );
}
