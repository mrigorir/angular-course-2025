import type { Country } from '../interfaces/country.interface';
import type { RestCountries } from '../interfaces/countries';

export class CountryMapper {
  static mapRestCountriesToCountry(country: RestCountries): Country {
    const { population, capital, cca2, flag } = country;
    const { svg } = country.flags;
    const { official } = country.translations["spa"] ?? 'No spanish name';

    return {
      population,
      flagSvg: svg,
      name: official,
      capital,
      cca2,
      flag,
    };
  }

  static mapRestCountriesArrayToCountryArray(countries: RestCountries[]): Country[] {
    return countries.map(this.mapRestCountriesToCountry);
  }
}
