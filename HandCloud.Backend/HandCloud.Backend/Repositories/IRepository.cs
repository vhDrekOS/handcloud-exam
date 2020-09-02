﻿using System.Collections.Generic;
using System.Threading.Tasks;

namespace HandCloud.Backend.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<List<T>> GetAllAsync();

        Task<T> GetAsync(int id);

        Task<T> AddAsync(T entity);

        Task<T> UpdateAsync(T entity);

        Task<T> DeleteAsync(int id);
    }
}