using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedDataAsync(DataContext context)
        {
            if(await context.Genders.AnyAsync()) return;

            var genders = new List<Gender> 
            {
                new Gender { GenderId = 1, Description = "Male" },
                new Gender { GenderId = 2, Description = "Female" },
            };

            foreach (var gender in genders)
            {
                await context.Genders.AddAsync(gender);
            }

            await context.SaveChangesAsync();
        }
    }
}