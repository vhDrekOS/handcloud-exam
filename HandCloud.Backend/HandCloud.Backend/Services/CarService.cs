using HandCloud.Backend.Models;
using HandCloud.Backend.Repositories;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HandCloud.Backend.Services
{
    public class CarService : ICarService
    {
        private readonly ICarRepository _carRepository;

        public CarService(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }

        public async Task<List<Car>> GetAllAsync()
        {
            return await _carRepository.GetAllAsync();
        }

        public async Task<Car> GetAsync(int id)
        {
            return await _carRepository.GetAsync(id);
        }

        public async Task<Car> AddAsync(Car car)
        {
            return await _carRepository.AddAsync(car);
        }

        public async Task<Car> UpdateAsync(Car entity)
        {
            return await _carRepository.UpdateAsync(entity);
        }

        public async Task<Car> DeleteAsync(int id)
        {
            return await _carRepository.DeleteAsync(id);
        }
    }
}