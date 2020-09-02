using HandCloud.Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandCloud.Backend.Repositories
{
    public interface ICarRepository
    {
        Task<List<Car>> GetAllAsync();

        Task<Car> GetAsync(int id);

        Task<Car> AddAsync(Car entity);

        Task<Car> UpdateAsync(Car entity);

        Task<Car> DeleteAsync(int id);
    }
}
