using Microsoft.EntityFrameworkCore;
using PopProject.Models;
using System;

namespace PopProject
{
    public class PopProjectContext: DbContext
    {
        public PopProjectContext(DbContextOptions<PopProjectContext> options) : base(options) { }
        public DbSet<Post> Posts { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);

        }

    }
}
