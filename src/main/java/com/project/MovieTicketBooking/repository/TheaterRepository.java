package com.project.MovieTicketBooking.repository;

import org.apache.el.stream.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.MovieTicketBooking.entity.Theater;

@Repository
public interface TheaterRepository extends JpaRepository<Theater,Long> {
     // Optional<Theater> findByName(String name);
}
