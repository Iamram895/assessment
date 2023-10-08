import Countries from "../../../../models/countriesDetails";

const getCountriesDetails = async (
  _: any,
  args: {
    countryCode: string[];
    fromYear: number;
    endYear: number;
    limit: number;
    offset: number;
  }
) => {
  const { countryCode, fromYear, endYear, limit, offset } = args;

  try {
    const query: any = { "country.id": { $in: countryCode } };

    if (fromYear) {
      query.date = { $gte: fromYear };
    }

    if (endYear) {
      query.date = { ...query.date, $lte: endYear };
    }

    const countryData = await Countries.find(query)
      .limit(limit)
      .skip(offset)
      .sort({ fromYear: -1 });

    const mappedData = countryData.map((item: any) => {
      const countryName = item.country?.value || null;
      const countryCode = item.country?.id || null;

      return {
        name: countryName,
        countryCode: countryCode,
        populations: item.value,
        year: item.date,
      };
    });

    return mappedData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch country details");
  }
};

export default getCountriesDetails;
