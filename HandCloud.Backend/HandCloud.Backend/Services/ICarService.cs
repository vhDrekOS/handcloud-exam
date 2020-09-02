using HandCloud.Backend.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HandCloud.Backend.Services
{
    public interface ICarService
    {
        Task<List<Car>> GetAllAsync();

        Task<Car> GetAsync(int id);

        Task<Car> AddAsync(Car entity);

        Task<Car> UpdateAsync(Car entity);

        Task<Car> DeleteAsync(int id);
    }
}